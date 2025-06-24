/** Styles */
import './Credit.css'

/** Interfaces */
export interface CreditProps {
    role?: string;
    name: string;
    url?: string;
}

/** Component */
function Credit(props: CreditProps) {
    const { role, name, url } = props;

    return (
        <div className="credit">
            <p className="credit__role">{role ?? ''}</p>
            {
                url ?
                    <a className="credit__name" href={url} target='_blank'>{name}</a> :
                    <p className="credit__name">{name}</p>
            }
        </div>
    )
}

export default Credit