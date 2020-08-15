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
          size : null,
          linkUrl : 'jeans' },
        { id : 2,
          title : 'Shirts',
          imgUrl : 'https://source.unsplash.com/400x400/?shirts',
          size : null,
          linkUrl : ''  },
        { id : 3,
            title : 'Scarfs',
            imgUrl : 'https://source.unsplash.com/400x400/?scarfs',
            size : null,
            linkUrl : ''  },
        { id : 4,
            title : 'Jackets',
            imgUrl : 'https://source.unsplash.com/600x400/?jackets',
            size : 'large',
            linkUrl : ''  },
        { id : 5,
            title : 'Hats',
            // imgUrl : 'https://i.ibb.co/cvpntL1/hats.png',
            imgUrl : 'https://source.unsplash.com/600x400/?hats',
            size : 'large',
            linkUrl : ''  },
      ]
    }
  }

  render(){

    return(
      <div className='directory-menu'>
        {
          this.state.sections.map(({id, ...sections}) => <MenuItem key={id} {...sections} />)
        }
      </div>
    )
  }
}

export default Directory