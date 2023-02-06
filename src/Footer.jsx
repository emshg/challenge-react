import './index.css';

export default function Footer() {
    return (
        <div className='footer-block'>
            <img src="https://d1udg35vyt7lx2.cloudfront.net/b8bf38217e1439a0a2d96c5b1cbe8f0a/dist/img/button.svg" className="button-logo" alt="logo" />
            <div className='under-botton'>
                <span className='under-the'>under the&nbsp;</span><span style={{
                    fontWeight: 700,
                    fontSize: 38,
                    color: '#446cb3'
                }}>button</span>
                <div className='social'>
                    <a href="https://www.facebook.com/underthebutton" target="_blank" rel="noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#3B5998"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                    </a>
                    <a href="https://twitter.com/underthebutton" target="_blank" rel="noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#1DA1F2"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
                    </a>
                    <a href="https://www.youtube.com/channel/UCOZZgrL4fm1Ptj3ywC3z4ZA" target="_blank" rel="noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#FF0000"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon fill="#FFFFFF" points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
                    </a>
                    <a href="https://www.instagram.com/underthebutton/" target="_blank" rel="noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#E4405F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.5" y2="6.5"></line></svg>
                    </a>
                </div>
                <div className="section-links">
                    <a className="section-link" href="https://www.underthebutton.com/page/about">About</a>
                    <a className="section-link" href="https://www.underthebutton.com/page/contact">Contact</a>
                    <a className="section-link" href="https://thedp.us2.list-manage.com/subscribe?u=a96885e3aa3f8131c872ee329&amp;id=370b4800ba">newsletters</a>
                    <a className="section-link" href="https://www.underthebutton.com/join">Join</a>
                    <a className="section-link" href="//projects.underthebutton.com">Projects</a>
                    <a className="section-link" href="//thedp.com" target="_blank" rel="noreferrer">The DP</a>
                    <a className="section-link" href="//34st.com" target="_blank" rel="noreferrer">34th Street</a>
                </div>
            </div>
        </div>
    );
}