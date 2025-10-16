import SyntaxHighlighter from 'react-syntax-highlighter';
import { dark, docco, irBlack } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import type { OutputComponentPropType } from '../constants';

const OutputComponent = ({ output }: OutputComponentPropType) => {
    return (
        <div className='output'>
            <SyntaxHighlighter
                language='bash'
                wrapLines={true}
                wrapLongLines={true}
                showLineNumbers={true}
                style={dark}
            >
                {output}
            </SyntaxHighlighter>
        </div>

    )
}
export default OutputComponent