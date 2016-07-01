import React from 'react'
import ImagePlaceholder from '../components/ImagePlaceholder'
import moment from 'moment'
import 'styles/FilmItem.scss'

class FilmItem extends React.Component {
  render() {
    const { film,type } = this.props
    return (
      <li>
        <div className="movie-item">
          <div className="movie-item-img">
            <ImagePlaceholder src={film.cover&&film.cover.origin} placeholder="http://static.m.maizuo.com/v4/static/app/asset/3d2cdb3bd9a23609aa2d84e7c2bfd035.png" />
        </div>
          <div className="desc">
            <div className="left">
              <div className="film-name">{film.name}</div>
              <div className="count">
                <span>{film.cinemaCount}</span>
                <span>家影院上映</span>
                <span>{film.watchCount}</span>
                <span>人购票</span>
              </div>
            </div>
            <div className="right">
              {type==='COMING_SOON'?<span className="score" style={{fontSize:12+'px'}}>{this.getTime(film.premiereAt)}</span>:<span className="score">{film.grade}</span>}
            </div>
          </div>
        </div>
      </li>
    )
  }
  getTime(date){
    return moment(date).format('M月DD日上映');
  }
}
export default FilmItem
