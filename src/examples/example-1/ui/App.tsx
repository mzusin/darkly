import React from "react"
import VMenuBar from '../../../main/ui/menus/VMenuBar';
import Panel from '../../../main/ui/panels/Panel';
import StretchBox from '../../../main/ui/boxes/StretchBox';
import BottomBar from '../../../main/ui/boxes/BottomBar';

const App = () => {
    return (
        <div className="bg-slate-900 text-slate-100 h-full w-full flex">
            <VMenuBar>

            </VMenuBar>

            <div className="flex flex-1">

                <Panel>

                </Panel>

                <div className="flex flex-col flex-1">

                    <StretchBox>

                    </StretchBox>
                    <BottomBar>

                    </BottomBar>
                </div>
            </div>

        </div>
    )
};

export default App;