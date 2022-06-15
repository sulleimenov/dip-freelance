import React, { useEffect, useState } from 'react'

import useAuth from './../../hooks/useAuth'
import Answer from '../../components/Answer'
import api from './../../services/api/db'
import Loading from '../../components/Loading'

const Candidate = () => {
	const auth = useAuth()
	const [tenders, setTenders] = useState([])
	const [items, setItems] = useState([])
	const [loaded, setLoaded] = useState(false)

	useEffect(() => {
		api
			.get(`/tender`)
			.then(function (response) {
				setTenders(response.data)
				setLoaded(true)
			})
			.catch(function (error) {
				setLoaded(false)
				console.log(error)
			})
	}, [])

	useEffect(() => {
		setItems(tenders.find((tender) => tender.author_id === auth.user.id))
	}, [auth])

	return loaded ? <Answer items={items} /> : <Loading />
}

export default Candidate
