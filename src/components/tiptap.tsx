"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

const Tiptap = () => {
	const editor = useEditor({
		extensions: [StarterKit],
		content: "<p>Hello World! 🌎️</p>",
	});

	return (
		<EditorContent editor={editor} className="w-full h-full overflow-y-auto" />
	);
};

export default Tiptap;
