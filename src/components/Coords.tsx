import { Coord } from '../types'

type CoordsProps = {
  coord: Coord | undefined
}

function Coords({ coord }: CoordsProps) {
  return (
    <section className='section-bottom right'>
      <div className='block-bottom'>
        <div className='block-bottom-inner'>
          <div className='block-bottom-pic pic-coords'></div>
          <div className='block-bottom-texts'>
            <div className='block-bottom-text-block'>
              <div className='block-bottom-text-block-title'>
                Longitude: {coord?.lon}
              </div>
              <div className='block-bottom-text-block-desc'>
                Longitude measures distance east or west of the prime meridian.
              </div>
            </div>
            <div className='block-bottom-text-block'>
              <div className='block-bottom-text-block-title'>
                Latitude: {coord?.lat}
              </div>
              <div className='block-bottom-text-block-desc'>
                Latitude lines start at the equator (0 degrees latitude) and run
                east and west, parallel to the equator.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Coords
