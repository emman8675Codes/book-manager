import InputLabel from "@/Components/InputLabel";
import SecondaryButton from "@/Components/SecondaryButton";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";

export default function Create() {
    const { data, setData, post, processing, errors } = useForm({
        title: "",
        author: "",
        genre: "",
    });

    function submit(e) {
        e.preventDefault();
        post(route("books.store"));
    }
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Add a book
                </h2>
            }
        >
            <Head title="Add a book" />

            <div className="m-4">
                <h1>Adding a Book</h1>
                <form onSubmit={submit}>
                    <div className="border border-slate-400 w-1/2">
                        <InputLabel htmlFor="Title"></InputLabel>
                        <TextInput
                            type="text"
                            value={data.title}
                            onChange={(e) => setData("title", e.target.value)}
                            placeholder="Enter Book Title"
                        ></TextInput>
                    </div>
                    <div className="border border-slate-400 w-1/2">
                        <InputLabel htmlFor="Author"></InputLabel>
                        <TextInput
                            type="text"
                            value={data.author}
                            onChange={(e) => setData("author", e.target.value)}
                            placeholder="Enter Author"
                        ></TextInput>
                    </div>
                    <div className="border border-slate-400 w-1/2">
                        <InputLabel htmlFor="Genre"></InputLabel>
                        <TextInput
                            type="text"
                            value={data.genre}
                            onChange={(e) => setData("genre", e.target.value)}
                            placeholder="Enter Genre"
                        ></TextInput>
                    </div>

                    <SecondaryButton type="submit" disabled={processing}>
                        Add book
                    </SecondaryButton>
                </form>
            </div>
        </AuthenticatedLayout>
    );
}
