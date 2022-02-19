import { marked } from 'marked'

const MdxContent = (props) => {
    return (
        <section className='content container section box'>
            <div dangerouslySetInnerHTML={{ __html: marked(props.content) }}></div>
        </section>
    )
}

export default MdxContent;