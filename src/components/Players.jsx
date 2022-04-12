import React, { useEffect, createRef } from "react";
import { connect } from "react-redux";

const Players = ({players, addStarter, addOther}) => {

    const gridPlayers = createRef()

    useEffect(() => {
        setScrollContainer()
        document.addEventListener('click', setScrollContainer)
    }, []) 
    
    // Función que fija el tamaño del grid de los jugadores
    const setScrollContainer = (desktop = true) => {
        let container = gridPlayers.current
        if (container) {
        const generatedGrid = () => {
            let items = container.getElementsByClassName('player')
            let itemsLength = items.length
            let bp = window.matchMedia("(min-width: 640px)").matches ? window.matchMedia("(min-width: 1024px)").matches ? 4 : 2 : 1

            const getWidth = () => {
            let n = bp + (itemsLength > bp ? 0.3 : 0)
            return (itemsLength / n) * 100
            }
            return `
                    display: grid;
                    grid-template-columns: repeat(${itemsLength}, 225px);
                    grid-gap: 1rem;
                    width : ${getWidth()}%;
                `
        }
        let styles = !desktop && window.matchMedia("(min-width: 1024px)").matches ? `display: grid; grid-row-gap: 1rem;` : generatedGrid()
        container.setAttribute('style', styles)
        }
    }

    return (
        <section>
        <h2>Players</h2>
        <div className="player-container">
            <div ref={gridPlayers} onClick={() => setScrollContainer.bind(this)}>
                {
                    players.map(j =>(
                        <article className="player" key={j.player_id}>
                            <img src={j.player.data.image_path} alt={j.player.data.display_name}/>
                            <h3>{j.player.data.display_name}</h3>
                            <div>
                                <button onClick={() => addStarter(j)}>Starter</button>
                                <button onClick={() => addOther(j)}>Others</button>
                            </div>
                        </article>
                    ))
                }
            </div>
        </div>
        </section>
    )
}

const mapStateToProps = state => ({
    players: state.players
});

const mapDispatchToPros = dispatch => ({
    addStarter(player) {
        dispatch({
            type:"ADD_STARTER",
            player
        })
    },
    addOther(player) {
        dispatch({
            type:"ADD_OTHER",
            player
        })
    }
});

export default connect(mapStateToProps, mapDispatchToPros)(Players)