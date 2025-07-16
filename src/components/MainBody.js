import Search from "./Search"
import ResturentCard from "./ResturentCard"
const MainBody = () => {
    return (
      <div className="main-body">
        <main className="main-body-header">
          <h1 className="main-body-title">Resturant List</h1>
          <Search />
        </main>
        <div className="main-body-content">
          <ResturentCard />
          <ResturentCard />
          <ResturentCard />
        </div>
      </div>
    )
}

export default MainBody