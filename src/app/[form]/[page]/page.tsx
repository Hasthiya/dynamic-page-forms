export default function Page({ params }: { params: { form: string, page: string } }) {
    return (
        <div>
            <p>Form: {params.form}</p>
            <p>Page: {params.page}</p>
        </div>
    )
}