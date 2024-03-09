import {db} from "@/app/db";

export default function SnippetCreatePage() {
    async function createSnippet(formData:FormData){
        'use server'

        console.log('formData',formData)
        const title=formData.get('title') as string
        const code=formData.get('code') as string
       const snippet= await db.snippet.create({
            data:{
                title,
                code
            }
        })
        console.log('snippet',snippet)
    }

    return (
        <form action={createSnippet}>
            <h3 className="font-bold">Create a Snippet</h3>
            <div className="flex flex-col gap-4">
                <div className="flex gap-4">
                    <label className="w-12" htmlFor="title">title</label>
                    <input name="title" id="title" className="border rounded w-full"/>
                </div>
                <div className="flex gap-4">
                    <label className="w-12" htmlFor="code">code</label>
                    <input name="code" id="code" className="border rounded w-full"/>
                </div>
                <button type="submit" className="rounded p-2 bg-blue-200">
                    create
                </button>
            </div>

        </form>
    );
}
