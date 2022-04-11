import Shimmer from "./shimer"
import SkeletonELement from "./skeletonElement"

const SkeletonUser = ({theme})=> {
    const themeClass = theme || "light"
  return (<div className={`user-wrap ${theme}`}>
    <SkeletonELement type="avatar" />
    <SkeletonELement type="text" />
    <SkeletonELement type="text" />
    <Shimmer />
    </div>
  )
}

export default SkeletonUser