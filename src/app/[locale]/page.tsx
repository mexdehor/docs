import Tiptap from "@/components/tiptap";

export default async function Home() {
	return (
		<main className="flex gap-4 items-center justify-center w-full h-full">
			<div className="p-4 w-full h-[48rem] prose border">
				<Tiptap />
			</div>
		</main>
	);
}
