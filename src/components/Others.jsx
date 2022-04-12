import React from "react";
import { connect } from "react-redux";

const Others = ({others, removeOther}) => (
    <section>
        <h2>Others</h2>
        <div className="Banking">
            {
                others.map(j=>(
                    <article className="other" key={j.player_id}>
                        <div>
                            <img src={j.player.data.image_path} alt={j.player.data.display_name} />
                            <button onClick={() => removeOther(j)}>x</button>
                        </div>
                        <p>{j.player.data.display_name}</p>
                    </article>
                ))
            }
        </div>
    </section>
)
const mapStateToProps = state => ({
    others: state.others
});

const mapDispatchToPros = dispatch => ({
    removeOther(player) {
        dispatch({
            type:"REMOVE_OTHER",
            player
        })
    }
});
export default connect(mapStateToProps,mapDispatchToPros)(Others)