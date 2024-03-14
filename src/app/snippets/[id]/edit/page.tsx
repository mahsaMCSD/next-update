import {db} from "@/app/db";
import {notFound} from "next/navigation";
import SnippetEditForm from "@/components/snippet-edit-form";


interface SnippetEditPageProps {
    params: {
        id: string
    }
}

export default async function SnippetEditPage(props: SnippetEditPageProps) {
    const snippet = await db.snippet.findFirst({
        where: {id: +props.params.id}
    })
    if (!snippet) {
        return notFound()
    }
    return (
        <div>
            <h1>Print files</h1>
            <SnippetEditForm snippet={snippet}/>
        </div>
    );
}
