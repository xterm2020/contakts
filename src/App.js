import React, { useState, useEffect } from 'react';
import Cart from './screens/cart';
import axios from 'axios';
import { Listofposts, Contakt, Row, Itemtitle, Itembody } from './style';
// import { Item } from './screens/items';

function App() {
  const [users, setUsers] = useState([])
  const [posts, setPosts] = useState([])
  const [show, setShow] = useState(false)
  const [string, setString] = useState()
  const [search, setSearch] = useState()
  const [userId, setUserId] = useState()
  const [currentPage, setCurrentPage] = useState(1)
  const [usersPerPage] = useState(2)
  const [prevVisible, setPrevVisible] = useState()
  const [nextVisible, setNextVisible] = useState()


  let modified_users = [[], []]
  let search_users = [[], []]
  let filter = search === '' ? users : users.map(user => {
    return user.name.toLowerCase().includes(search)
  })


  users.map((user, i) => {
    let col = i % 2
    return modified_users[col].push(user)
  })
  filter.map((f, i) => {
    if (f === true) {
      console.log(users[i])
      let col = i % 2
      return search_users[col].push(f)
    }
  })
  console.log(search_users)

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then(res => {
      setUsers(res.data)
    })
    axios.get(`https://jsonplaceholder.typicode.com/posts`).then(res => {
      console.log('posts: ', res.data)
      setPosts(res.data)
    })
  }, [])

  const lastUserIndex = currentPage * usersPerPage
  const firstUserIndex = lastUserIndex - usersPerPage
  const currentUser = [[], []]
  currentUser[0] = modified_users[0].slice(firstUserIndex, lastUserIndex)
  currentUser[1] = modified_users[1].slice(firstUserIndex, lastUserIndex)

  const handleGetInfo = (id) => {
    setString('clicked')
    setUserId(id)
    alert(id)
  }
  console.log('id: ', userId)

  const handlePrevContakts = () => {
    setCurrentPage(currentPage - 1)
    if ((currentPage - 1) === 1) {
      setPrevVisible(true)
      setNextVisible(false)
    }
    console.log(currentPage)
  }
  const handleNextContakts = () => {
    setCurrentPage(currentPage + 1)
    if (currentPage === 2) {
      setPrevVisible(false)
      setNextVisible(true)
    }
    console.log(currentPage)
  }
  const handleSearch = (e) => {
    setSearch(e)
    console.log('search: ', e)
  }
  const handleShowItemBody = () => {
    setShow(true)
  }

  console.log(filter)
  return (
    <div className="App">
      <div className="header">
        <h3 className="test">Lorem ipsum</h3>
        <input className="search" placeholder="Search" onChange={(e) => { handleSearch(e.target.value) }} />
      </div>
      <div className="container">
        {search ? <Contakt>
          {string === 'clicked' ? <Row primary>
            {search_users[0].map(result => {
              return (
                <Cart name={result.name} email={result.email} phone={result.phone} id={result.id} getUserId={handleGetInfo} />
              )

            })}
          </Row> : <Row>
              {search_users[0].map(result => {
                return (
                  <Cart name={result.name} email={result.email} phone={result.phone} id={result.id} getUserId={handleGetInfo} />
                )

              })}
            </Row>}
          {string === 'clicked' ? <Row primary>
            {search_users[1].map(result => {
              return (
                <Cart name={result.name} email={result.email} phone={result.phone} id={result.id} getUserId={handleGetInfo} />
              )

            })}
          </Row> : <Row>
              {search_users[1].map(result => {
                return (
                  <Cart name={result.name} email={result.email} phone={result.phone} id={result.id} getUserId={handleGetInfo} />
                )

              })}
            </Row>}
        </Contakt> : <Contakt>
            {string === 'clicked' ? <Row primary>
              {currentUser[0].map(result => {
                return (
                  <Cart name={result.name} email={result.email} phone={result.phone} id={result.id} getUserId={handleGetInfo} />
                )

              })}
            </Row> : <Row>
                {currentUser[0].map(result => {
                  return (
                    <Cart name={result.name} email={result.email} phone={result.phone} id={result.id} getUserId={handleGetInfo} />
                  )

                })}
              </Row>}
            {string === 'clicked' ? <Row primary>
              {currentUser[1].map(result => {
                return (
                  <Cart name={result.name} email={result.email} phone={result.phone} id={result.id} getUserId={handleGetInfo} />
                )

              })}
            </Row> : <Row>
                {currentUser[1].map(result => {
                  return (
                    <Cart name={result.name} email={result.email} phone={result.phone} id={result.id} getUserId={handleGetInfo} />
                  )

                })}
              </Row>}
          </Contakt>}
        {string === 'clicked' ? <Listofposts primary >
          <ul>
            {posts.filter(post => post.userId === userId).slice(0, 5).map((filteredPost, index) => {
              let title = 'Title ' + (index + 1)
              return (
                <div>
                  {/* <Item title={title} body={filteredPost.body} /> */}
                  <Itemtitle onClick={handleShowItemBody}>
                    {title}
                  </Itemtitle>
                  {show ? <Itembody >
                    {filteredPost.body}
                  </Itembody> :
                    null
                  }
                </div>
              )
            })}
          </ul>
        </Listofposts> : <Listofposts ></Listofposts>}
      </div>
      <div className="footer">
        <button className="left" disabled={prevVisible} onClick={handlePrevContakts}>Previos</button>
        <button className="right" disabled={nextVisible} onClick={handleNextContakts}>Next</button>
      </div>
    </div>
  );
}

export default App;
