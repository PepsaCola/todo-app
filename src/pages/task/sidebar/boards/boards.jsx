import {List} from "./styled";
import {Board} from "./board/board";
import {useState} from "react";

export const Boards = ({data}) => {

    const [activeBoardId, setActiveBoardId] = useState(null); // тримаємо активну дошку

    const handleBoardClick = (id) => {
        setActiveBoardId(id);
    };

    return (
        <List>
            {data.map((item) => <Board
                key={item.id}
                item={item}
                checked={item.id === activeBoardId} // true тільки для активної
                onSelect={() => handleBoardClick(item.id)} // колбек для вибору
            />)}
        </List>
    )
}