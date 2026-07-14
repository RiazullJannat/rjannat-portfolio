import { IoCloudDownloadSharp } from "react-icons/io5";
import { styles } from "../styles";
const DownloadResume = () => {
    return (
        <div>
            <a
                className={`${styles.navBarButton} gap-2 items-center`}
                href={'/rjannat-resume.pdf'}
                download={'rjannat-resume.pdf'}
            >   <span><IoCloudDownloadSharp /></span>
                <span className="hidden md:block">Download Resume</span>
            </a>
        </div>
    );
};

export default DownloadResume;