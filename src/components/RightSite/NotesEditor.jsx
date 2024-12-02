import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import "react-quill/dist/quill.snow.css"; // Estilo predeterminado de react-quill
import ReactQuill from "react-quill";
import "../../assets/MarkdownEditor.css";

const NotasEditor = () => {
    const [content, setContent] = useState("");

    // Función para actualizar el contenido
    const handleContentChange = (value) => {
        setContent(value);
    };

    // Exportar nota como archivo Markdown
    const exportNote = () => {
        const blob = new Blob([content], { type: "text/markdown" });
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = "nota.md";
        link.click();
    };

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            
            height: "100vh",
            padding: "20px"
        }}>
            {/* Contenedor principal del editor y vista previa */}
            <div style={{
                width: "80%",
                maxWidth: "800px",
                margin: "0 auto",
            }}>
                {/* Editor */}
                <div style={{
                    border: "1px solid #ddd",
                    borderRadius: "8px",
                    padding: "20px",
                    marginBottom: "20px",
                    backgroundColor: "#fff",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)"
                }}>
                    <h3 style={{ marginBottom: "10px" }}>Editor de Notas</h3>
                    <ReactQuill
                        value={content}
                        onChange={handleContentChange}
                        placeholder="Escribe tu nota aquí..."
                        modules={{
                            toolbar: [
                                ["bold", "italic", "underline", "strike"], // Formatos básicos
                                [{ align: [] }], // Alineación
                                [{ color: [] }, { background: [] }], // Colores
                                ["link", "image"], // Enlaces e imágenes
                                ["clean"], // Limpiar formato
                            ],
                        }}
                        theme="snow"
                    />
                </div>

                {/* Vista previa de Markdown */}
                <div style={{
                    border: "1px solid #ddd",
                    borderRadius: "8px",
                    padding: "20px",
                    backgroundColor: "#f9f9f9",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)"
                }}>
                    <h3 style={{ marginBottom: "10px" }}>Vista previa</h3>
                    <div className="markdown-preview" style={{ whiteSpace: "pre-wrap", wordWrap: "break-word" }}>
                        <ReactMarkdown>{content}</ReactMarkdown>
                    </div>
                </div>

                {/* Botón de exportar */}
                <button
                    onClick={exportNote}
                    style={{
                        marginTop: "20px",
                        padding: "10px 20px",
                        backgroundColor: "#007bff",
                        color: "#fff",
                        border: "none",
                        borderRadius: "4px",
                        cursor: "pointer",
                        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)"
                    }}
                >
                    Exportar Nota
                </button>
            </div>
        </div>
    );
};

export default NotasEditor;
