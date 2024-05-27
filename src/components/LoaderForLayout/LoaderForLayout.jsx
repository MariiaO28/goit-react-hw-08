import { TailSpin } from 'react-loader-spinner';
import css from './LoaderForLayout.module.css';

export default function LoaderForAppComponent() {
    return (
        <div className={css.loader}>
            <TailSpin
                visible={true}
                height="80"
                width="80"
                color="#6CB4EE"
                ariaLabel="tail-spin-loading"
                radius="1"
                wrapperStyle={{}}
                wrapperClass=""
            />
        </div>
    );
}

