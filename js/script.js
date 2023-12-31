const modalTrigger = document.querySelectorAll('[data-modal]'),
  modal = document.querySelector('.modal'),
  modalCloseBtn = document.querySelector('[data-close]')

function closeModal() {
  modal.classList.add('hide')
  modal.classList.remove('show')
  document.body.style.overflow = ''
}

function openModal() {
  modal.classList.add('show')
  modal.classList.remove('hide')
  document.body.style.overflow = 'hidden'
	clearInterval(modalTimerId)
}

modalTrigger.forEach(item => {
	item.addEventListener('click', openModal)
})

modalCloseBtn.addEventListener('click', closeModal)

modal.addEventListener('click', (e) => {
  if (e.target == modal) {
    closeModal()
  }
})

document.addEventListener('keydown', (e) => {
  if (e.code === 'Escape' && modal.classList.contains('show')) {
    closeModal()
  }
})

// const modalTimerId = setTimeout(openModal, 4000)

// function showModalByScroll() {
// 	if(window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1) {
// 		openModal()
// 		window.removeEventListener('scroll', showModalByScroll)
// 	}
// }

// window.addEventListener('scroll', showModalByScroll)
