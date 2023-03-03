/* eslint-disable no-undef */
const URL = 'http://localhost:5000'

/*******************************************************************/
// Show Friends
const [boton] = $('#boton')

const getFriends = (response) => {
  clearText(lista)
  response.forEach((friend) => {
    const li = document.createElement('li')
    li.innerText = friend.name
    lista.append(li)
  })
  console.log(response)
}

const showFriends = () => {
  $.get(`${URL}/amigos`, getFriends)
}

boton.addEventListener('click', showFriends)

/*******************************************************************/
// Search Friend, ShowFriend, SearchFriendDetails, ShowFriendDetails
const [input] = $('#input')
const [search] = $('#search')
const [lista] = $('#lista')
const [amigo] = $('#amigo')
const [details] = $('#details')

const showFriend = (friend) => {
  const id = input.value
  amigo.innerText = friend.name
  id === '' && clearText(amigo)
  clearInput(input)
}

const searchFriend = () => {
  const id = input.value
  $.get(`${URL}/amigos/${id}`, showFriend)
}

const ShowFriendDetails = ({ name, email, age }) => {
  const id = input.value
  amigo.innerText = `ID: ${id} - Name: ${name} - Email: ${email} - Age: ${age}`
  id === '' && clearText(amigo)
  clearInput(input)
}

const searchDetails = () => {
  const id = input.value
  $.get(`${URL}/amigos/${id}`, ShowFriendDetails)
}

search.addEventListener('click', searchFriend)
details.addEventListener('click', searchDetails)

/*******************************************************************/
// DeleteFriend
const [inputDelete] = $('#inputDelete')
const [buttonDelete] = $('#delete')
const [success] = $('#success')

const deleteFriend = () => {
  const id = inputDelete.value
  if (id !== '') {
    $.ajax({
      url: `${URL}/amigos/${id}`,
      type: 'DELETE',
      success: (response) => {
        getFriends(response)
        success.innerText = 'Amigo eliminado correctamente'
      }
    })
  }
  clearInput(inputDelete)
}

buttonDelete.addEventListener('click', deleteFriend)

/*******************************************************************/
// Function Helpers
const clearInput = (input) => {
  input.value = ''
}

const clearText = (text) => {
  text.innerText = ''
}
