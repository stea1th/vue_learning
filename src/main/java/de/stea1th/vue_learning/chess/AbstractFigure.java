package de.stea1th.vue_learning.chess;

public abstract class AbstractFigure {

    private boolean white;
    private boolean alive;
    private String position;
    private String name;

    public AbstractFigure(boolean white, boolean alive, String position, String name) {
        this.white = white;
        this.alive = alive;
        this.position = position;
        this.name = name;
    }

    public void move(String newPosition){

    }

}
