import React from "react"
import VMenuBar from '../../../main/ui/menus/VMenuBar';
import Panel from '../../../main/ui/panels/Panel';
import StretchBox from '../../../main/ui/boxes/StretchBox';
import BottomBar from '../../../main/ui/boxes/BottomBar';
import PanelTitle from '../../../main/ui/panels/PanelTitle';
import HSplitter from '../../../main/ui/dividers/HSplitter';

const App = () => {
    return (
        <div className="bg-slate-900 text-slate-200 h-full w-full flex text-base">
            <VMenuBar>

            </VMenuBar>

            <div className="flex flex-1">

                <Panel>
                    <PanelTitle>Stripes</PanelTitle>
                    <HSplitter />
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