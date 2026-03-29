const Card = ({ nome, imagem, id, tipo }) => {
  return (
    <div className="card">
      
      <img src={imagem} alt={nome} />
      <h2>{nome}</h2>
      <p> {id} </p>
      <p> {tipo} </p>
    </div>
  )
}

export default Card