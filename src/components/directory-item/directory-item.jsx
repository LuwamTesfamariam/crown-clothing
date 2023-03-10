import './directory-item.style.scss'

const DirectoryItem = ({ prop }) => {
  const { imageUrl, title } = prop;
  return (
    <div className="directory-item-container">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`
        }} />
      <div className="body">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  )
}

export default DirectoryItem;