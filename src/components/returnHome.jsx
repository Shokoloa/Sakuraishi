import { useNavigate } from 'react-router-dom';
import { compass } from '../Icons';

export const ReturnHome = () => {
    const navigate = useNavigate();

    return (
        <header className="returnhome anim-3" style={{ '--duration': '3.2s' }}>
            <div id="returnhome" onClick={() => navigate('/')}><i dangerouslySetInnerHTML={{ __html: compass }} /></div>
        </header>
    )
}