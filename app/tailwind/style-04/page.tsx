import {cn} from "cn";
import STYLES from "./style-04.style";



export default function page() {
    return(
        <>
            {/* {<P className={`animate-wiggle ${STYLES.a}`}>사용자정의 애니메이션(비권장)</P>} */}
            <P className={cn("animate-wiggle", ${STYLES.a})}>사용자정의 애니메이션(권장)</P>

        </>
    )
}