import './category-item.styles.scss'

const Categoryitem = ({ category }) => {
    const {imageURL, title} = category;
return(
    <div className="category-container">
          <div className='background-image' style={{
            backgroundImage: `url(${imageURL})` /*object destructuring which allows us to use a string variable inside another string*/
          }} />
          <div className="category-body-container">
            <h2>{title}</h2>
            <p>Shop Now</p>
          </div>
        </div>
)
}

export default Categoryitem