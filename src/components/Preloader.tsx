
import load from '../../assets/imgs/theme/loading.gif'


export const Preloader = () => {

  
  return (
    // <!-- Preloader Start -->
    <div id="preloader-active">
        <div className="preloader d-flex align-items-center justify-content-center">
            <div className="preloader-inner position-relative">
                <div className="text-center">
                    <img src={load} alt="jobhub" />
                </div>
            </div>
        </div>
    </div>
  )
}
