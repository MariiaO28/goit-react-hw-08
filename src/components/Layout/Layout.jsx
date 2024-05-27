import { Suspense } from "react";
import {Toaster} from 'react-hot-toast';
import AppBar from '../AppBar/AppBar';
import LoaderForLayout from '../LoaderForLayout/LoaderForLayout';
import css from './Layout.module.css';

export default function Layout({ children }) {
    return (
        <div className={css.container}>
            <AppBar />
            <Suspense fallback={<LoaderForLayout/>}>
                {children}
              <Toaster position='top-center' reverseOrder='false'/>
            </Suspense>
        </div>
    )
}