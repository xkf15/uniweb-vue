export default class Moon {
    constructor(ctx, width, height) {
        this.ctx = ctx
        this.width = width
        this.height = height
    }

    draw() {
        let ctx = this.ctx,
            gradient = ctx.createRadialGradient(
            100, 650, 80, 300, 650, 800)
        //径向渐变
        // gradient.addColorStop(0, 'rgb(255,255,255)')
        gradient.addColorStop(0, 'rgb(46, 11, 29)')
        // gradient.addColorStop(0.2, 'rgb(40,40,50)')
        // gradient.addColorStop(0.4, 'rgb(20,20,30)')
        gradient.addColorStop(1, 'rgb(10,0,10)')
        ctx.save()
        ctx.fillStyle = gradient
        ctx.fillRect(0, 0, this.width, this.height)
        ctx.restore()
    }
}
