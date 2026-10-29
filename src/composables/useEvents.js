const isUserRegistered = (eventId) => {
  const numId = Number(eventId);
  const eventExists = events.value.some(e => e.id === numId);
  if (!eventExists) return false;
  return userRegistrations.value.some(r => r.eventId === numId);
};