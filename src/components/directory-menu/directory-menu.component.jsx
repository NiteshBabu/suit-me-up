import React from 'react'
import './directory-menu.styles.scss'
import MenuItem from '../menu-item/menu-item.component'


class Directory extends React.Component{
  constructor(){
    super()

    this.state = {
      sections : [
        { id : 1,
          title : 'Jeans',
          imgUrl : 'https://source.unsplash.com/400x400/?jeans',
          size : null },
        { id : 2,
          title : 'Shirts',
          imgUrl : 'https://source.unsplash.com/400x400/?shirts',
          size : null  },
        { id : 3,
            title : 'Scarfs',
            imgUrl : 'https://source.unsplash.com/400x400/?scarfs',
            size : null  },
        { id : 4,
            title : 'Jackets',
            imgUrl : 'https://source.unsplash.com/600x400/?jackets',
            size : 'large'  },
        { id : 5,
            title : 'Hats',
            // imgUrl : 'https://i.ibb.co/cvpntL1/hats.png',
            imgUrl : 'https://source.unsplash.com/600x400/?hats',
            size : 'large'  },
      ]
    }
  }

  render(){
    return(
      <div className='directory-menu'>
        {
          this.state.sections.map(({id, title, imgUrl, size}) => <MenuItem key={id} title={title} imgUrl={imgUrl} size={size} />)
        }
      </div>
    )
  }
}

export default Directory