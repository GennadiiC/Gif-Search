import Picture from './Picture';
import NoPictures from './NoPictures';
const PictureList = (props) => {

  const results = props.data;
  let pictures;
  results.length > 0 ?
   pictures = results.map(picture =>
     <Picture url={picture.images.fixed_height.url} key={picture.id} />
   ) :
   pictures = <NoPictures />;

  const styles = {
    h2: {
      textAlign: 'center'
    },
    ul: {
      display: 'flex',
      flexWrap: 'wrap',
      listStyleType: 'none',
      margin: 'auto'
    }
  }

  return (
    <div>
    <h2 style={styles.h2}>PictureList</h2>
      <ul style={styles.ul}>
        {pictures}
      </ul>
    </div>
  );
}

export default PictureList;
