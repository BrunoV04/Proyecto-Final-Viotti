import LoadingCss from './Loading.module.css'
import lottie from 'lottie-web';
import { useEffect, useRef } from 'react';

const Loading = () => {
    const lottieRef = useRef(null);
    useEffect(() => {
        lottie.loadAnimation({
            container: lottieRef.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: '../../../public/loading.json'
        })
    })
    return (
        <div className="container">
            <div className={LoadingCss.svg}>
                <div ref={lottieRef} />
            </div>
        </div>

    )
}

export default Loading