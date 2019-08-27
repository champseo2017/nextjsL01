import React from 'react'

const Photos = ({photos, loadingphotos}) => {
    if(loadingphotos){
        return <h2>Loading...</h2>
    }
    return <div className="row">
            {photos && photos.map(photo =>(
                <div key={photo.id} className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                     <div className="box-part text-center">
                        <img className="card-img-top" src={photo.url} alt=      {photo.title}/>
                        <div className="title">
                        <h4>{photo.title}</h4>
                        </div>
                    </div>
                </div>
            ))}
            </div>
}

export default Photos