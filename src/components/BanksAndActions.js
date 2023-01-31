import './BanksAndActions.css'

const BanksAndActions = () => {
    return (
        <div className="qbanks-actions-item">
            <h3 className="grid-part-headline small-headline">Q-banks&nbsp;/ Actions</h3>
            <ul className="sidebar">
                <li className="sidebar-item"><button>q-bank-a</button></li>
                <li className="sidebar-item"><button>q-bank-b</button></li>
                <li className="sidebar-item"><button>q-bank-c</button></li>
                <li className="sidebar-item"><button>action-a</button></li>
                <li className="sidebar-item"><button>action-b</button></li>
            </ul>
        </div>
    )
}

export default BanksAndActions