class App extends Component {
    render() {
        return(
            <div>
                <ClayButton 
                    label="Primary" 
                />
                <ClayButton 
                    icon="blogs" 
                    monospaced={true}
                    spritemap="/images/icons/icons.svg"
                />
                <ClayButton 
                    label="Secondary" 
                    style="secondary"
                    type="button"
                />
                <ClayButton 
                    icon="blogs" 
                    monospaced={true}
                    spritemap="/images/icons/icons.svg"
                    style="secondary"
                />
                <ClayButton 
                    label="Link" 
                    style="link"
                    type="button"
                />
            </div>
        );
    }
}

Component.render(App, mountNode);