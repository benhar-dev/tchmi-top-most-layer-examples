declare module TcHmi.Functions.Beckhoff {
    /**
     * Reads the current values which are referenced from a base recipe and write it into a new recipe.
     * @param ctx Context object which provides context specific data and functions.
     * @param recipeReference
     * @param newRecipeName
     * @param newRecipePath
     */
    function TeachAsNewRecipe(ctx: SelectableRequired<TcHmi.Context, 'success' | 'error'>, recipeReference: string, newRecipeName: string, newRecipePath: string): void;
}
//# sourceMappingURL=TeachAsNewRecipe.d.ts.map