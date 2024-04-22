"use client"
import { useEffect, useRef } from "react";

import { io } from "socket.io-client"
import AceEditor from "react-ace";
languages.forEach((lang) => {
    require(`ace-builds/src-noconflict/mode-${lang.language}`);
})

themes.forEach((th) => {
    require(`ace-builds/src-noconflict/theme-${th.theme}`);
})


import { useState } from "react";
import { useAtom } from "jotai"
import { editorFontAtom, editorLanguageAtom, editorThemeAtom, menuIsOpen } from "@/lib/atoms";
import { languages, themes } from "../constants";
import NewEditor from "@/components/ui/NewEditor";
import { DialogCloseButton } from "@/components/ui/ShareDialog";
import { Settings } from "@/components/ui/Settings";
import { AiOutlineDownload } from "react-icons/ai";

// I have tried this method but its not working
// require(`ace-builds/src-noconflict/mode-${editorLanguageAtom.init}`);

export default function EditorPage({ params }) {

    const socket = useRef(null);
    const [data, setData] = useState("");
    const editor = useRef();
    const [editorMode] = useAtom(editorLanguageAtom)
    const [editorTheme] = useAtom(editorThemeAtom)
    const [editorFontSize] = useAtom(editorFontAtom);
    const [isOpen] = useAtom(menuIsOpen)
    const downloadLinkRef = useRef(null);
    console.log("editors mode ", editorLanguageAtom.init)
    const downloadData = () => {
        const blob = new Blob([data], { type: 'text/plain;charset=utf-8' }); // Create Blob
        const url = window.URL.createObjectURL(blob); // Create temporary URL

        // Create a hidden anchor element for download
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', `${params.roomId}.txt`); // Set filename
        link.style.display = 'none';
        document.body.appendChild(link);

        // Simulate click on download link
        link.click();

        // Clean up temporary URL and link element
        window.URL.revokeObjectURL(url);
        document.body.removeChild(link);
    };

    Todos:
    //* -when you visit the page , emit the login event and join the user socketid with the room id
    //* - Add a way to get the data from the editor
    //* - store the data in the satet
    //* - add an event listener for when the user changes something in the editor.
    //* - update the state with that new value.
    //* - send it to the server every time there is a change?
    //* - unload evnet is left to be written





    useEffect(() => {
        if (!socket.current) {

            // const ENDPOINT = "ws://localhost:3000";
            // socket.current = io(ENDPOINT, { transports: ['websocket','polling'] })
            socket.current = io('https://socket-server-9ffg.onrender.com/', { transports: ['websocket'] });
            //? WebSockets- provide a full-duplex communication channel over a single, long-lived connection, allowing for more interactive communication between the client and server1.
            //? Polling- is a less efficient technique where the client repeatedly requests (polls) the server to check if there is new data

            socket.current.on("connect", () => {
                console.log("Socket id : ", socket.current.id, " Room id  : ", params.roomId);
                const { roomId } = params;
                // const userId = socket.current.id;
                socket.current.emit('joinRoom', roomId, (error) => {
                    if (error) {
                        console.log("Error logging in : ", error);
                    }
                    //? with this emit the server send the data from the db to all the client in the room.
                    console.log("user is connected succesfully with the server")
                })
            });
        }
        socket.current.on('storedData', (data) => {
            // Handle received data
            console.log("Message received from server : ", data);
            // editor.current.editor.setValue(data);
            setData(data)
        });
        // socket.current.on("message", (msg) => {
        //     console.log("Message received from server : ", msg);
        //     editor.current.editor.setValue(msg);
        //     // setData((oldData) => oldData);
        // })
        socket.current.on("notification", notif => {
            console.log("Notification received : ", notif);
        })

        window.addEventListener('unload', () => {
            console.log("Client disconnected");
            alert("client disconnected")
        })
        return () => {
            if (socket.current) {
                socket.current.close();
            }
        };
    }, []);

    const handleSendMessage = () => {
        const { roomId } = params;
        let value = editor.current.editor.getValue();
        console.log("value : ", value);
        socket.current.emit('sendMessage', { value, roomId }, () => {
            console.log("message sent", value)
        });
    }

    return (
        <div className="flex flex-row w-screen h-screen bg-black gap-1">

            <AceEditor
                placeholder={`Welcome to the live share ${params.roomId}  editor!`}
                keyboardHandler="Vim"
                className="w-full h-full z-100"
                wrapEnabled
                width="100vw"
                height="100vh"
                // it will wait for 1 second then run the onchange command
                debounceChangePeriod={1000}
                mode={editorMode}
                theme={editorTheme}
                onChange={() => handleSendMessage()}
                editorProps={{ $blockScrolling: false }}
                ref={editor}
                value={data}
                setOptions={{
                    enableBasicAutocompletion: true,
                    enableLiveAutocompletion: true,
                    enableSnippets: true,
                    showLineNumbers: true,
                    tabSize: 2,
                }}
                fontSize={editorFontSize}
                showPrintMargin={true}

                showGutter={true}
                highlightActiveLine={true}
            />
            <div class="absolute bottom-4 right-4">
                <button class="bg-slate-500 hover:bg-slate-800 text-white font-bold p-1 rounded-full shadow-lg hover:shadow-xl transition duration-300">
                <AiOutlineDownload className='text-4xl   ' onClick={downloadData} />
                </button>
            </div>
            {isOpen ?
                <div className='h-full self-center bg-gradient-to-t from-indigo-500 via-blue-500 to-green-600 flex flex-col  items-center gap-6 lg:hidden md:hidden '>
                    <NewEditor className="text-4xl mt-4 hover:bg-slate-200  rounded " iconSize={"text-4xl"} />
                    <DialogCloseButton className="bg-slate-300" />
                    <Settings />
                </div> : <div className=""></div>}
            <a ref={downloadLinkRef} style={{ display: 'none' }} />
        </div>
    );
}
