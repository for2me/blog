


import { memo } from 'react' 
import { useFindIcon } from '@/common/hooks' 

export default memo((props)=>{
    return useFindIcon(props)({
        setting: [
            <path d="M34.0003 41L44 24L34.0003 7H14.0002L4 24L14.0002 41H34.0003Z"  />,
            <path d="M24 29C26.7614 29 29 26.7614 29 24C29 21.2386 26.7614 19 24 19C21.2386 19 19 21.2386 19 24C19 26.7614 21.2386 29 24 29Z" />
        ], 
        like:[
            <path d="M15 8C8.92487 8 4 12.9249 4 19C4 30 17 40 24 42.3262C31 40 44 30 44 19C44 12.9249 39.0751 8 33 8C29.2797 8 25.9907 9.8469 24 12.6738C22.0093 9.8469 18.7203 8 15 8Z" />
        ], 
        tips:[
            <path d="M18 17V23L24 20L30 23V17" />,
            <path d="M40 20C40 26.8077 35.7484 32.6224 29.7555 34.9336H24H18.2445C12.2516 32.6224 8 26.8077 8 20C8 11.1634 15.1634 4 24 4C32.8366 4 40 11.1634 40 20Z" />,
            <path d="M29.7557 34.9336L29.0766 43.0831C29.0334 43.6014 28.6001 44 28.08 44H19.9203C19.4002 44 18.9669 43.6014 18.9238 43.0831L18.2446 34.9336" />,
        ], 
        copy:[
            <path d="M13 12.4316V7.8125C13 6.2592 14.2592 5 15.8125 5H40.1875C41.7408 5 43 6.2592 43 7.8125V32.1875C43 33.7408 41.7408 35 40.1875 35H35.5163" />,
            <path d="M32.1875 13H7.8125C6.2592 13 5 14.2592 5 15.8125V40.1875C5 41.7408 6.2592 43 7.8125 43H32.1875C33.7408 43 35 41.7408 35 40.1875V15.8125C35 14.2592 33.7408 13 32.1875 13Z" />,
        ],  
        delete:[
            <path d="M6 12H42" />,
            <path d="M19 35H29" />,
            <path d="M15 12L16.2 5H31.8L33 12" />,
            <path fillRule="evenodd" clipRule="evenodd" d="M37 12L35 43H13L11 12H37Z"  />,
        ],  
        power:[
            <path d="M24 4V24" />,
            <circle cx="24" cy="24" r="18" strokeDasharray="93.04px, 20.04" strokeDashoffset="18.45" />,
        ],  
        application:[
            <circle cx="34.5" cy="13.5" r="6.5" />,
            <circle cx="34.5" cy="34.5" r="6.5" />,
            <circle cx="13.5" cy="13.5" r="6.5" />,
            <circle cx="13.5" cy="34.5" r="6.5" />,
        ], 
        lock:[
            <path d="M24 30V36" />,
            <rect x="6" y="22" width="36" height="22" rx="2" />,
            <path d="M14 22V14C14 8.47715 18.4772 4 24 4C29.5228 4 34 8.47715 34 14V22"  />,
        ],  
        unlock:[
            <path d="M24 30V36" />,
            <rect x="7" y="22.0476" width="34" height="22" rx="2" />,
            <path d="M14 22V14.0047C13.9948 8.87022 17.9227 4.56718 23.0859 4.05117C28.249 3.53516 32.9673 6.97408 34 12.0059" />,
        ], 
        expand:[
            <path d="M30 6H42V18" />,
            <path d="M18 42H6V30" />,
            <path d="M42 6L29 19" />,
            <path d="M19 29L6 42" />,
        ],
        scanning:[
            <path d="M34 24L14 24" />,
            <path d="M16 6H8C6.89543 6 6 6.89543 6 8V16" />,
            <path d="M16 42H8C6.89543 42 6 41.1046 6 40V32"  />,
            <path d="M32 42H40C41.1046 42 42 41.1046 42 40V32" />,
            <path d="M32 6H40C41.1046 6 42 6.89543 42 8V16"  />,
        ],
        wifi:[
            <path d="M38 25.799C30.268 18.067 17.732 18.067 10 25.799"  />,
            <path d="M32 32.3137C27.5817 27.8954 20.4183 27.8954 16 32.3137" />,
            <path d="M4 18.9653C4.5888 18.4073 5.19522 17.8786 5.8174 17.3792C17.0371 8.37423 33.3821 8.90292 44 18.9653" />,
            <path fillRule="evenodd" clipRule="evenodd" d="M24 40C25.3807 40 26.5 38.8807 26.5 37.5C26.5 36.1193 25.3807 35 24 35C22.6193 35 21.5 36.1193 21.5 37.5C21.5 38.8807 22.6193 40 24 40Z" fill="#fff"/>,
        ],

        system:[
            <path d="M18 6H8C6.89543 6 6 6.89543 6 8V18C6 19.1046 6.89543 20 8 20H18C19.1046 20 20 19.1046 20 18V8C20 6.89543 19.1046 6 18 6Z" />,
            <path d="M18 28H8C6.89543 28 6 28.8954 6 30V40C6 41.1046 6.89543 42 8 42H18C19.1046 42 20 41.1046 20 40V30C20 28.8954 19.1046 28 18 28Z" />,
            <path d="M35 20C38.866 20 42 16.866 42 13C42 9.13401 38.866 6 35 6C31.134 6 28 9.13401 28 13C28 16.866 31.134 20 35 20Z"  />,
            <path d="M40 28H30C28.8954 28 28 28.8954 28 30V40C28 41.1046 28.8954 42 30 42H40C41.1046 42 42 41.1046 42 40V30C42 28.8954 41.1046 28 40 28Z" />
        ],
    })
})