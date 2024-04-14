import './SearchBar.css'
import SearchButtonSubmit from '../../assets/search-button-submit.svg'

export const SearchBar = () => {
  return (
    <>
     <form className='search-from'>
              <input type="text" placeholder='search food' className='search-input' required />
            <button type='submit'>
              <img src={SearchButtonSubmit}/>
            </button>
      </form>
    </>
  )
}