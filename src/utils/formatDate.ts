const getTimeDifference = (date: number | string) => {
	const presentTime = new Date()
	const parsedTime = new Date(date)
	
	const differenceInMilliseconds = presentTime.getTime() - parsedTime.getTime()
	
	const differenceInSeconds = differenceInMilliseconds / 1000
	const differenceInMinutes = differenceInSeconds / 60
	const differenceInHours = differenceInMinutes / 60
	const differenceInDays = differenceInHours / 24
	
	return {
		milliseconds: differenceInMilliseconds,
		seconds: differenceInSeconds,
		minutes: differenceInMinutes,
		hours: differenceInHours,
		days: differenceInDays,
	}
}

export const formatDistanceToNow = (date: number | string) => {
	const { milliseconds, seconds, minutes, hours, days } = getTimeDifference(date)
	
	const hasPassedOneMinuteOrMore = milliseconds >= 60000
	const hasPassedSixtyMinutesOrMore = milliseconds >= 3600000 && milliseconds < 86400000
	const hasPassedTwentyFourHoursOrMore = milliseconds >= 86400000
	
	if (hasPassedSixtyMinutesOrMore) {
		return `há cerca de ${Math.floor(hours)} horas atrás`
	} 
	if (hasPassedTwentyFourHoursOrMore) {
		return (milliseconds < 86400000 * 2) 
			? `Ontem`
			: `há ${Math.floor(days)} dias atrás`
	} 
	if (hasPassedOneMinuteOrMore) {
		return (Math.floor(minutes) > 1)
			?	`há ${Math.floor(minutes)} minutos atrás`
			:	`há ${Math.floor(minutes)} minuto atrás`
	}
	
	return `há ${Math.floor(seconds)} segundos atrás`
}

export const formatDate = (date: number | string) => {
	const parsedDate = new Date(date)
	
	const month_BR = [
		'Jan', 
		'Fev', 
		'Mar', 
		'Abr', 
		'Mai', 
		'Jun', 
		'Jul', 
		'Ago', 
		'Set', 
		'Out', 
		'Nov', 
		'Dez'
	]
	
	return `${parsedDate.getDate()} de ${month_BR[parsedDate.getMonth()]} de ${parsedDate.getFullYear()} às ${parsedDate.getHours()}:${parsedDate.getMinutes()}h`
}