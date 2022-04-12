import React from "react";
import { connect } from "react-redux";
import field from "../field.svg"

const Starters = ({starters,removeStarter}) => (
    <section>
        <h2>Starters</h2>
        <div className="Field">
            {
                starters.map(j=>(
                    <article className="starter" key={j.player_id}>
                        <div>
                            <img src={j.player.data.image_path} alt={j.player.data.display_name} />
                            <button onClick={() => removeStarter(j)}>x</button>
                        </div>
                        <p>{j.player.data.display_name}</p>
                    </article>
                ))
            }
            <img src={field} alt="Soccer Field" />
        </div>
    </section>
)
const mapStateToProps = state => ({
    starters: state.starters
});

const mapDispatchToPros = dispatch => ({
    removeStarter(player) {
        dispatch({
            type:"REMOVE_STARTER",
            player
        })
    }
});
export default connect(mapStateToProps,mapDispatchToPros)(Starters)