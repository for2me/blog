import { memo } from "react"; 
 
export default memo((props)=>{ 

    return (
        <div style={{ width: 200, margin: '120px'}}>
            <div>
                <a href="tel:12345678910">电话</a>
            </div>
            <div>
                <a href="sms:12345678910,12345678911?body=你好">android短信</a> 
            </div>
            <div>
                <a href="sms:/open?addresses=12345678910,12345678911&body=你好">ios短信</a>
            </div>
            <div>
                <a href="wx://">ios短信</a> 
            </div>
 

            <div>
                <label className="theme-toggle theme-toggle--reversed" title="Toggle theme">
                    <input type="checkbox" />
                    <span className="theme-toggle-sr">Toggle theme</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        width="1em"
                        height="1em"
                        fill="currentColor"
                        stroke-linecap="round"
                        className="theme-toggle__classic"
                        viewBox="0 0 32 32"
                    >
                        <clipPath id="theme-toggle__classic__cutout">
                        <path d="M0-5h30a1 1 0 0 0 9 13v24H0Z" />
                        </clipPath>
                        <g clip-path="url(#theme-toggle__classic__cutout)">
                        <circle cx="16" cy="16" r="9.34" />
                        <g stroke="currentColor" stroke-width="1.5">
                            <path d="M16 5.5v-4" />
                            <path d="M16 30.5v-4" />
                            <path d="M1.5 16h4" />
                            <path d="M26.5 16h4" />
                            <path d="m23.4 8.6 2.8-2.8" />
                            <path d="m5.7 26.3 2.9-2.9" />
                            <path d="m5.8 5.8 2.8 2.8" />
                            <path d="m23.4 23.4 2.9 2.9" />
                        </g>
                        </g>
                    </svg>
                </label>
            </div>
        </div>
    )
})