export default function StatusBadge({ error, loading, lastUpdated, totalReadings = 0 }) {
  if (error) {
    return <span className="badge badge-error">● Desconectado</span>
  }
  if (loading && !lastUpdated) {
    return <span className="badge badge-loading">● Conectando...</span>
  }
  return (
    <span className="badge badge-ok" title={lastUpdated?.toLocaleString('pt-BR')}>
      ● Online | {totalReadings} leituras
    </span>
  )
}
