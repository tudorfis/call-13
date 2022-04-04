const html = e => e

export default html`
    <article class="user-card">
        <img data-image />
        <div class="title">
            <h1 data-title></h1>
            <div data-info class="info">
                <p><strong>EMAIL:</strong> <slot name="email" /></p>
                <p><strong>PHONE:</strong> <slot name="phone" /></p>
            </div>
            <button data-toggle></button>
        </div>
    </article>
`